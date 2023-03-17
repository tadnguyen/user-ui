const sortUsers = (usersSort, sort, type) => {
    if (usersSort) {
        if (sort) {
            if (type === 'username') {
                usersSort?.sort((a, b) => {
                    if (a.login?.username < b.login?.username) {
                        return -1
                    }
                    if (a.login?.username > b.login?.username) {
                        return 1
                    }
                    return 0
                })
            } else if (type === 'fullname') {
                usersSort?.sort((a, b) => {
                    const fullNameA = a.name.title + a.name.first + a.name.last;
                    const fullNameB = b.name.title + b.name.first + b.name.last;
                    if (fullNameA < fullNameB) {
                        return -1
                    }
                    if (fullNameA > fullNameB) {
                        return 1
                    }
                    return 0
                })
            } else {
                usersSort?.sort((a, b) => {
                    if (a[type] < b[type]) {
                        return -1
                    }
                    if (a[type] > b[type]) {
                        return 1
                    }
                    return 0
                })
            }
        }
        if (!sort) {
            if (type === 'username') {
                usersSort?.sort((a, b) => {
                    if (a.login?.username > b.login?.username) {
                        return -1
                    }
                    if (a.login?.username < b.login?.username) {
                        return 1
                    }
                    return 0
                })
            } else if (type === 'fullname') {
                usersSort?.sort((a, b) => {
                    const fullNameA = a.name.title + a.name.first + a.name.last;
                    const fullNameB = b.name.title + b.name.first + b.name.last;
                    if (fullNameA > fullNameB) {
                        return -1
                    }
                    if (fullNameA < fullNameB) {
                        return 1
                    }
                    return 0
                })
            } else {
                usersSort?.sort((a, b) => {
                    if (a[type] > b[type]) {
                        return -1
                    }
                    if (a[type] < b[type]) {
                        return 1
                    }
                    return 0
                })
            }
        }

    }
}
export default sortUsers