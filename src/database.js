import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-54-167-152-185.compute-1.amazonaws.com',
    user: 'rettyvexckbjfo',
    password: '6f55c68c8bd63cf67c8c6935d0f0ef0b61d6960f6c5c1ef571046586bd0b988c',
    database: 'dd4bkd2i86uio3',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})