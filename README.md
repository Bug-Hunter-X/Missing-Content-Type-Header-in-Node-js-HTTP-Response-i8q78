# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior in the client (e.g., browser) because the client cannot reliably determine the content type and may render it incorrectly or not at all.

**Problem:** The provided `bug.js` example shows an HTTP server that omits the `Content-Type` header, potentially causing issues for clients expecting a specific media type (like `text/html`, `application/json`, etc.).

**Solution:** The `bugSolution.js` example shows the corrected code, which includes setting the `Content-Type` header in the response to explicitly define the content type, ensuring proper handling by the client.