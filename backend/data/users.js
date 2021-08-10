import bcrypt from 'bcryptjs'

const users= [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: true,
        zetaRewards: 5000,
    },
    {
        name: 'John Cena',
        email: 'cantseeme@example.com',
        password: bcrypt.hashSync('1234567', 10),
        zetaRewards: 200,
    },
    {
        name: 'Random Mishra',
        email: 'rm@example.com',
        password: bcrypt.hashSync('1234567', 10),   
        zetaRewards: 2000,
    },
    {
        name: 'Random Sharma',
        email: 'rs@example.com',
        password: bcrypt.hashSync('1234567', 10),
        zetaRewards: 1200,
    },
]

export default users