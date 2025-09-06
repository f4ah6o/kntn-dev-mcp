# Kintone Customize Development Support MCP Server

An MCP (Model Context Protocol) server that provides comprehensive development support for kintone customizations, including API specifications, field type documentation, and development tips.

## Features

- 🔍 **API Specification Search**: Query kintone REST API specifications by endpoint, method, or category
- 📝 **Field Types Documentation**: Access detailed information about kintone field types and their properties  
- 💡 **Development Tips**: Search development best practices and troubleshooting guides
- ✅ **Request Validation**: Validate API requests against kintone specifications
- 🔄 **Auto-Updates**: Automatic synchronization with official kintone documentation via CICD

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd kintone-mcp-server

# Install dependencies
pnpm install

# Build the server
pnpm build

# Start the server
pnpm start
```

## MCP Client Configuration

Add the server to your MCP client configuration (e.g., Claude Desktop):

```json
{
  "mcpServers": {
    "kintone-dev-support": {
      "command": "node",
      "args": ["/path/to/kintone-mcp-server/dist/index.js"]
    }
  }
}
```

## Available Tools

| Tool Name | Description | Parameters |
|-----------|-------------|------------|
| `search_api_specs` | Search kintone API specifications | `query`, `category`, `method` |
| `search_field_types` | Search field type information | `fieldType`, `category` |
| `search_development_tips` | Find development guidance | `query`, `category`, `difficulty` |
| `get_api_endpoint` | Get detailed endpoint info | `endpoint`, `method` |
| `validate_api_request` | Validate API request format | `endpoint`, `method`, `requestBody` |
| `get_update_info` | Check data update status | `includeHistory` |

## Available Resources

| Resource URI | Description |
|--------------|-------------|
| `kintone://api/specifications` | Complete API specification catalog |
| `kintone://api/field-types` | Field types documentation |
| `kintone://tips/all` | All development tips |

## Usage Examples

### Search API Specifications
```javascript
{
  "name": "search_api_specs",
  "arguments": {
    "query": "get records",
    "category": "records"
  }
}
```

### Get Field Type Information
```javascript
{
  "name": "search_field_types", 
  "arguments": {
    "fieldType": "SINGLE_LINE_TEXT",
    "includeProperties": true
  }
}
```

### Find Development Tips
```javascript
{
  "name": "search_development_tips",
  "arguments": {
    "query": "performance optimization",
    "category": "performance"
  }
}
```

## Development

### Scripts

- `pnpm build` - Build TypeScript to JavaScript
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

### Project Structure

```
src/
├── models/           # Data models and interfaces
├── server/           # MCP server core functionality  
├── tools/            # Individual tool implementations
├── services/         # Storage and update services
└── index.ts         # Application entry point

tests/
├── contract/        # MCP protocol compliance tests
├── tools/           # Individual tool tests
├── integration/     # End-to-end scenario tests
├── unit/           # Unit tests
└── performance/    # Performance tests
```

### Testing

The project follows Test-Driven Development (TDD):

1. **Contract Tests**: Verify MCP protocol compliance
2. **Tool Tests**: Test individual tool functionality  
3. **Integration Tests**: End-to-end user scenarios
4. **Unit Tests**: Component-level testing

## Architecture

- **TypeScript**: Type-safe development with strict mode
- **MCP SDK**: Official Model Context Protocol implementation
- **File Storage**: JSON-based data storage for specifications
- **CICD Integration**: Automatic updates from official kintone sources
- **Vitest**: Fast unit testing framework
- **Biome**: Fast linting and formatting

## Data Sources

The server automatically synchronizes with official kintone resources:

- **API Specifications**: https://github.com/kintone/rest-api-spec
- **Field Types**: https://cybozu.dev/ja/kintone/docs/overview/field-types/
- **Development Tips**: https://cybozu.dev/ja/kintone/tips/development/

## Contributing

1. Follow the existing TDD workflow
2. All tests must pass before committing
3. Use Biome for code formatting
4. Update documentation for new features

## License

UNLICENSED - Private project