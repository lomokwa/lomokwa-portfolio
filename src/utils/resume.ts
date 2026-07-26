// Bump this value every time the resume PDF is updated so browsers/CDNs
// fetch the new file instead of serving a stale cached copy (the PDF is
// served with `cache-control: max-age=3600` and its filename never changes).
export const RESUME_VERSION = '2';

export const RESUME_URL = `/docs/mokwa-lorenzo-resume.pdf?v=${RESUME_VERSION}`;
