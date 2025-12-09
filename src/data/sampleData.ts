export interface AcceptanceCriteria {
    id: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
}

export interface WorkflowStep {
    id: string;
    step: number;
    title: string;
    description: string;
    actor: string;
}

export interface TestCase {
    id: string;
    title: string;
    steps: string[];
    expectedResult: string;
    priority: 'high' | 'medium' | 'low';
}

export interface APIContract {
    endpoint: string;
    method: string;
    description: string;
    requestSchema: object;
    responseSchema: object;
}

export interface GeneratedOutput {
    acceptanceCriteria: AcceptanceCriteria[];
    workflows: WorkflowStep[];
    testCases: TestCase[];
    sequenceDiagram: string;
    apiContracts: APIContract[];
}

export const sampleOutput: GeneratedOutput = {
    acceptanceCriteria: [
        {
            id: 'ac-1',
            description: 'User must be able to authenticate using email and password',
            priority: 'high',
        },
        {
            id: 'ac-2',
            description: 'System should validate email format before submission',
            priority: 'high',
        },
        {
            id: 'ac-3',
            description: 'Failed login attempts should display appropriate error messages',
            priority: 'medium',
        },
        {
            id: 'ac-4',
            description: 'Successful login should redirect to user dashboard',
            priority: 'high',
        },
        {
            id: 'ac-5',
            description: 'Password must be masked during input',
            priority: 'medium',
        },
        {
            id: 'ac-6',
            description: 'Session should persist for 24 hours or until logout',
            priority: 'medium',
        },
        {
            id: 'ac-7',
            description: 'System should implement rate limiting for login attempts',
            priority: 'low',
        },
    ],

    workflows: [
        {
            id: 'wf-1',
            step: 1,
            title: 'User navigates to login page',
            description: 'User opens the application and is presented with the login interface',
            actor: 'User',
        },
        {
            id: 'wf-2',
            step: 2,
            title: 'Enter credentials',
            description: 'User enters their email address and password into the respective fields',
            actor: 'User',
        },
        {
            id: 'wf-3',
            step: 3,
            title: 'Submit login form',
            description: 'User clicks the login button to submit credentials',
            actor: 'User',
        },
        {
            id: 'wf-4',
            step: 4,
            title: 'Validate input',
            description: 'System validates email format and password requirements',
            actor: 'System',
        },
        {
            id: 'wf-5',
            step: 5,
            title: 'Authenticate user',
            description: 'System verifies credentials against the database',
            actor: 'System',
        },
        {
            id: 'wf-6',
            step: 6,
            title: 'Create session',
            description: 'System creates a secure session token and stores it',
            actor: 'System',
        },
        {
            id: 'wf-7',
            step: 7,
            title: 'Redirect to dashboard',
            description: 'User is redirected to their personalized dashboard',
            actor: 'System',
        },
    ],

    testCases: [
        {
            id: 'tc-1',
            title: 'Successful login with valid credentials',
            steps: [
                'Navigate to login page',
                'Enter valid email: user@example.com',
                'Enter valid password: SecurePass123!',
                'Click "Login" button',
            ],
            expectedResult: 'User is redirected to dashboard and session is created',
            priority: 'high',
        },
        {
            id: 'tc-2',
            title: 'Login fails with invalid email format',
            steps: [
                'Navigate to login page',
                'Enter invalid email: notanemail',
                'Enter valid password: SecurePass123!',
                'Click "Login" button',
            ],
            expectedResult: 'Error message displayed: "Please enter a valid email address"',
            priority: 'high',
        },
        {
            id: 'tc-3',
            title: 'Login fails with incorrect password',
            steps: [
                'Navigate to login page',
                'Enter valid email: user@example.com',
                'Enter incorrect password: WrongPass',
                'Click "Login" button',
            ],
            expectedResult: 'Error message displayed: "Invalid email or password"',
            priority: 'high',
        },
        {
            id: 'tc-4',
            title: 'Password masking verification',
            steps: [
                'Navigate to login page',
                'Click on password field',
                'Type any password',
                'Observe password field',
            ],
            expectedResult: 'Password characters are masked with dots or asterisks',
            priority: 'medium',
        },
        {
            id: 'tc-5',
            title: 'Session persistence check',
            steps: [
                'Login with valid credentials',
                'Close browser tab',
                'Reopen application within 24 hours',
            ],
            expectedResult: 'User remains logged in and sees dashboard',
            priority: 'medium',
        },
    ],

    sequenceDiagram: `sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant AuthService
    participant Database
    
    User->>Frontend: Enter email & password
    User->>Frontend: Click Login
    Frontend->>Frontend: Validate email format
    Frontend->>API: POST /auth/login
    API->>AuthService: Authenticate(email, password)
    AuthService->>Database: Query user by email
    Database-->>AuthService: User record
    AuthService->>AuthService: Verify password hash
    alt Authentication successful
        AuthService->>AuthService: Generate session token
        AuthService->>Database: Store session
        Database-->>AuthService: Session saved
        AuthService-->>API: Auth token + user data
        API-->>Frontend: 200 OK + token
        Frontend->>Frontend: Store token in localStorage
        Frontend->>User: Redirect to dashboard
    else Authentication failed
        AuthService-->>API: Invalid credentials
        API-->>Frontend: 401 Unauthorized
        Frontend->>User: Display error message
    end`,

    apiContracts: [
        {
            endpoint: '/auth/login',
            method: 'POST',
            description: 'Authenticate user and create session',
            requestSchema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: {
                        type: 'string',
                        format: 'email',
                        example: 'user@example.com',
                    },
                    password: {
                        type: 'string',
                        minLength: 8,
                        example: 'SecurePass123!',
                    },
                },
            },
            responseSchema: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean',
                        example: true,
                    },
                    token: {
                        type: 'string',
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                    },
                    user: {
                        type: 'object',
                        properties: {
                            id: { type: 'string', example: 'usr_123456' },
                            email: { type: 'string', example: 'user@example.com' },
                            name: { type: 'string', example: 'John Doe' },
                        },
                    },
                    expiresAt: {
                        type: 'string',
                        format: 'date-time',
                        example: '2024-12-10T12:00:00Z',
                    },
                },
            },
        },
        {
            endpoint: '/auth/logout',
            method: 'POST',
            description: 'Invalidate user session',
            requestSchema: {
                type: 'object',
                required: ['token'],
                properties: {
                    token: {
                        type: 'string',
                        description: 'Session token to invalidate',
                    },
                },
            },
            responseSchema: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean',
                        example: true,
                    },
                    message: {
                        type: 'string',
                        example: 'Successfully logged out',
                    },
                },
            },
        },
        {
            endpoint: '/auth/validate',
            method: 'GET',
            description: 'Validate current session token',
            requestSchema: {
                type: 'object',
                properties: {
                    headers: {
                        type: 'object',
                        properties: {
                            Authorization: {
                                type: 'string',
                                example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                            },
                        },
                    },
                },
            },
            responseSchema: {
                type: 'object',
                properties: {
                    valid: {
                        type: 'boolean',
                        example: true,
                    },
                    user: {
                        type: 'object',
                        properties: {
                            id: { type: 'string' },
                            email: { type: 'string' },
                        },
                    },
                },
            },
        },
    ],
};
