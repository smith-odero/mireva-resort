# Mireva Resort

A modern resort management system designed to streamline operations and enhance guest experiences at Mireva Resort.

## Overview

Mireva Resort is a comprehensive platform that helps manage resort operations, guest bookings, services, and amenities. This system provides an intuitive interface for both resort staff and guests to interact with various resort services.

## Features

- **Guest Management**: Handle guest registrations, check-ins, and check-outs
- **Room Booking System**: Manage room availability, reservations, and pricing
- **Service Management**: Coordinate spa services, dining reservations, and activities
- **Staff Dashboard**: Tools for resort staff to manage day-to-day operations
- **Guest Portal**: Self-service options for guests to book services and view information

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Database system (PostgreSQL/MySQL recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/smith-odero/mireva-resort.git
   cd mireva-resort
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Run database migrations:
   ```bash
   npm run migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Access the application at `http://localhost:3000`
2. Admin dashboard available at `http://localhost:3000/admin`
3. Guest portal available at `http://localhost:3000/guest`

## Project Structure

```
mireva-resort/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Application pages
│   ├── services/      # Business logic and API calls
│   ├── utils/         # Utility functions
│   └── config/        # Configuration files
├── public/           # Static assets
├── docs/             # Documentation
└── tests/            # Test files
```

## Contributing

We welcome contributions to improve Mireva Resort! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please contact:
- Email: support@mirevaresort.com
- Documentation: [docs/](docs/)
- Issues: [GitHub Issues](https://github.com/smith-odero/mireva-resort/issues)

## Acknowledgments

- Built with modern web technologies
- Designed for hospitality industry best practices
- Community-driven development