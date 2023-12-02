export const userCreate = (req, res, next) => {
    res.status(201).json("created!")
}

export const userFind = (req, res, next) => {
    res.status(201).json("find!")
}

export const userUpdate = (req, res, next) => {
    res.status(201).json("updated!")
}

export const userDelete = (req, res, next) => {
    res.status(201).json("deleted!")
}