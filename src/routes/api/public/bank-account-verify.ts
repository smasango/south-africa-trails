import { createFileRoute } from '@tanstack/react-router'

// Mock South African bank Account Verification Service (AVS).
// Synthetic test data only — this endpoint never contacts a real bank and
// does not verify real accounts. It always returns isMock: true.

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
}

const SCENARIOS = ['verified', 'failed', 'manualreview', 'serviceerror'] as const

function jsonError(message: string) {
  return Response.json(
    { error: message },
    { status: 400, headers: CORS_HEADERS },
  )
}

export const Route = createFileRoute('/api/public/bank-account-verify')({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS_HEADERS }),

      POST: async ({ request }) => {
        let body: unknown
        try {
          body = await request.json()
        } catch {
          return jsonError('Request body must be valid JSON.')
        }

        if (body === null || typeof body !== 'object' || Array.isArray(body)) {
          return jsonError('Request body must be a JSON object.')
        }

        const { bankCode, accountNumber, accountHolderName, scenario } = body as Record<
          string,
          unknown
        >

        if (typeof bankCode !== 'string' || bankCode.trim().length === 0) {
          return jsonError('bankCode is required and must be a non-empty string.')
        }
        if (
          typeof accountNumber !== 'string' ||
          !/^\d{4,20}$/.test(accountNumber.trim())
        ) {
          return jsonError(
            'accountNumber is required and must be a string of 4 to 20 digits.',
          )
        }
        if (typeof accountHolderName !== 'string' || accountHolderName.trim().length < 2) {
          return jsonError(
            'accountHolderName is required and must be a string of at least 2 characters.',
          )
        }
        const normalizedScenario =
          typeof scenario === 'string' ? scenario.trim().toLowerCase() : ''
        if (!SCENARIOS.includes(normalizedScenario as (typeof SCENARIOS)[number])) {
          return jsonError(
            'scenario is required and must be one of: Verified, Failed, ManualReview, ServiceError.',
          )
        }

        switch (normalizedScenario) {
          case 'verified':
            return Response.json(
              {
                isMock: true,
                verificationStatus: 'Verified',
                accountOpen: true,
                accountHolderMatch: true,
                accountAcceptsCredits: true,
                message:
                  'Mock verification: the account is open, the account holder name matches, and the account accepts credits.',
              },
              { headers: CORS_HEADERS },
            )
          case 'failed':
            return Response.json(
              {
                isMock: true,
                verificationStatus: 'Failed',
                accountOpen: true,
                accountHolderMatch: false,
                accountAcceptsCredits: true,
                message:
                  'Mock verification: the account holder name does not match the name supplied for this account.',
              },
              { headers: CORS_HEADERS },
            )
          case 'manualreview':
            return Response.json(
              {
                isMock: true,
                verificationStatus: 'ManualReview',
                accountOpen: true,
                accountHolderMatch: null,
                accountAcceptsCredits: null,
                message:
                  'Mock verification: the result is inconclusive and requires manual review.',
              },
              { headers: CORS_HEADERS },
            )
          case 'serviceerror':
            return Response.json(
              {
                isMock: true,
                verificationStatus: 'ServiceError',
                accountOpen: null,
                accountHolderMatch: null,
                accountAcceptsCredits: null,
                message:
                  'Mock verification: the verification service is temporarily unavailable. Try again later.',
              },
              { status: 503, headers: CORS_HEADERS },
            )
          default:
            return jsonError(
              'scenario is required and must be one of: Verified, Failed, ManualReview, ServiceError.',
            )
        }
      },
    },
  },
})
