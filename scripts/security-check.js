const fs = require('fs');
const path = require('path');

console.log('🔒 Security Vulnerability Check for Discovery Homes Website\n');

// Check for common security issues
const securityChecks = [
  {
    name: 'Environment Variables',
    check: () => {
      const envFiles = ['.env', '.env.local', '.env.production'];
      const found = envFiles.filter(file => fs.existsSync(file));
      if (found.length > 0) {
        console.log('⚠️  Found environment files:', found.join(', '));
        console.log('   Make sure these are in .gitignore and contain no secrets');
      } else {
        console.log('✅ No environment files found in root');
      }
    }
  },
  {
    name: 'Package Vulnerabilities',
    check: () => {
      console.log('📦 Run "npm audit" to check for package vulnerabilities');
    }
  },
  {
    name: 'API Routes Security',
    check: () => {
      const apiDir = path.join(__dirname, '../app/api');
      if (fs.existsSync(apiDir)) {
        console.log('🔍 API routes found - check for:');
        console.log('   - Input validation (using Zod)');
        console.log('   - Rate limiting');
        console.log('   - CORS configuration');
        console.log('   - Authentication/authorization');
      }
    }
  },
  {
    name: 'Form Security',
    check: () => {
      console.log('📝 Check forms for:');
      console.log('   - CSRF protection');
      console.log('   - Input sanitization');
      console.log('   - Rate limiting');
    }
  }
];

securityChecks.forEach(check => {
  console.log(`\n${check.name}:`);
  check.check();
});

console.log('\n🔒 Additional Security Testing Commands:');
console.log('1. npm run lint:security    - Run security-focused linting');
console.log('2. npm audit                - Check for package vulnerabilities');
console.log('3. npm run build            - Check for build-time security issues');
console.log('4. Manual testing           - Test forms, API endpoints, authentication');

