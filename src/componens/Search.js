import React from 'react'
import { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
    const [value, setValue] = useState('')
    const {show, hide} = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if(value.trim()) {
            hide()
            github.search(value.trim())
        } else {
            show('введите данные пользователя')
        }
    }

    return (
        <div className="form-group pb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}