# ============================================================================ #
#                     OctalWeb: Design | Development Node                      #
# ============================================================================ #
# Multi-stage Dockerfile optimized for React and Vite development environments #
# within the OctalMesh infrastructure.                                         #
# ============================================================================ #

FROM node:22-alpine AS base

# Install system dependencies for native module compatibility
RUN apk add --no-cache libc6-compat

WORKDIR /app

# ============================================================================ #
#                       Stage: Dependencies Installation                       #
# ============================================================================ #
FROM base AS deps

COPY package*.json ./

# Use 'npm ci' for deterministic dependency resolution from lockfile
RUN npm ci

# ============================================================================ #
#                     Stage: Development Environment Setup                     #
# ============================================================================ #
FROM base AS development

WORKDIR /app

# Sync node_modules from the 'deps' stage to isolate build artifacts
COPY --from=deps --chown=node:node /app/node_modules ./node_modules

# Copy source manifest
COPY --chown=node:node . .

# Runtime environment configuration
ENV NODE_ENV=development
ENV DESIGN_WEB_PORT=5175

# Transition to non-privileged 'node' user
USER node

EXPOSE ${DESIGN_WEB_PORT}

# Execute development server
CMD ["sh", "-c", "npm run dev -- --port ${DESIGN_WEB_PORT}"]
