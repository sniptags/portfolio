module.exports = async()=>{
    let res ={}
    try{
        const eduResponse = await fetch('https://storageportfolioprodcn.table.core.windows.net/education()?si=read&spr=https&sv=2022-11-02&sig=oSAcZA%2BzqaXJ3bzLVXE%2B1LsBUx5uKcuVrNjGZRscW0Q%3D&tn=education',{
            headers :{
                "Accept":"application/json"
            }
        })
        if(eduResponse.ok && eduResponse.status === 200){
            const json = await eduResponse.json()
            res.edu = json.value
        }
        const skillResponse = await fetch('https://storageportfolioprodcn.table.core.windows.net/skills?si=skills-read&spr=https&sv=2022-11-02&sig=0XeJdn2ZQQ4m1xsmTBn0Gm6%2FPh90vRM%2FVKUbFGd4lyg%3D&tn=skills',{
            headers :{
                "Accept":"application/json"
            }
        })
        if(skillResponse.ok && skillResponse.status === 200){
            const json = await skillResponse.json()
            res.skills = json.value
        }

        const expResponse = await fetch('https://storageportfolioprodcn.table.core.windows.net/experience?si=read-exp&spr=https&sv=2022-11-02&sig=J7E%2FcToo%2Fr2r9O9C26%2BBT3fOVo%2FbSIQnv1QboK%2Fr0kI%3D&tn=experience',{
            headers :{
                "Accept":"application/json"
            }
        })
        if(expResponse.ok && expResponse.status === 200){
            const json = await expResponse.json()
            res.experience = json.value
        }

        return res
    }catch(err){
        return null
    }
}