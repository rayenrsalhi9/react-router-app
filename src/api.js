export async function fetchVans() {
    
    try {
        const res = await fetch('/api/vans')
        const data = await res.json()
        return data.vans
    } catch(err) {
        console.log(err)
        return []
    }

}