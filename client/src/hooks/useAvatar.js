import { useEffect, useState } from "react"

const useAvatar = (email) => {
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        const fetchAvatar = async () => {
            fetch("http://172.30.1.213:3600/api/v1/avatar/" + email).then(result => setAvatar(result.url)).catch(() => setAvatar('/avatar.png'))
        }
        fetchAvatar()
    })

    return avatar
}

export default useAvatar