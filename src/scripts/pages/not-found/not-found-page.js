export class NotFoundPage {
  async render() {
    return `
          <div class="not-found-container">
        <div class="not-found-content">
          <div class="not-found-image">
            <img src="/images/404-error.svg" alt="404 Not Found" width="300">
          </div>
          <h1 class="not-found-title">Oops! Page Not Found</h1>
          <p class="not-found-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div class="not-found-actions">
            <a href="/" class="not-found-button">Go to Homepage</a>
          </div>
        </div>
      </div>
        `;
  }
}
