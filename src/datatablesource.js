export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className='cellWithImg'>
                    <img className='cellImg' src={params.row.img} alt='' />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]

export const userRows = [
    {
        id: 1,
        username: 'snow',
        img: 'https://images.pexels.com',
        status: 'active',
        email: 'isnow@gmail.com',
        age: 35,
    },
    {
        id: 2,
        username: 'Jamie',
        img: 'https://images.pexels.com',
        status: 'passive',
        email: 'isnow@gmail.com',
        age: 34,
    },
    {
        id: 3,
        username: 'Amar',
        img: 'https://images.pexels.com',
        status: 'passive',
        email: 'isnow@gmail.com',
        age: 29,
    },
    {
        id: 4,
        username: 'Juliet',
        img: 'https://images.pexels.com',
        status: 'pending',
        email: 'isnow@gmail.com',
        age: 47,
    },
    {
        id: 5,
        username: 'Akash',
        img: 'https://images.pexels.com',
        status: 'active',
        email: 'isnow@gmail.com',
        age: 24,
    },
    {
        id: 6,
        username: 'Mansur',
        img: 'https://images.pexels.com',
        status: 'passive',
        email: 'isnow@gmail.com',
        age: 87,
    },
    {
        id: 7,
        username: 'AMG',
        img: 'https://images.pexels.com',
        status: 'pending',
        email: 'isnow@gmail.com',
        age: 65,
    },
]