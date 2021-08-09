import bcrypt from 'bcryptjs'

const users= [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: true
    },
    {
        name: 'John Cena',
        email: 'cantseeme@example.com',
        password: bcrypt.hashSync('1234567', 10),
    },
    {
        name: 'Random Mishra',
        email: 'rm@example.com',
        password: bcrypt.hashSync('1234567', 10),
    },
    {
        name: 'Random Sharma',
        email: 'rs@example.com',
        password: bcrypt.hashSync('1234567', 10),
    },
]

export default users