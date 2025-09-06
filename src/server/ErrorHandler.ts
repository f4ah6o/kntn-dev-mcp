export class ErrorHandler {
  static handleError(error: Error): any {
    console.error('MCP Server Error:', error);
    
    return {
      isError: true,
      content: [{
        type: 'text',
        text: `Error: ${error.message}`,
      }],
    };
  }

  static handleValidationError(message: string): any {
    return {
      isError: true,
      content: [{
        type: 'text',
        text: `Validation Error: ${message}`,
      }],
    };
  }

  static handleNotFound(resource: string): any {
    return {
      isError: true,
      content: [{
        type: 'text',
        text: `Resource not found: ${resource}`,
      }],
    };
  }
}