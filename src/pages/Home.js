import React, { useContext } from 'react'
import { Fragment } from 'react-is'
import { Search } from '../componens/Search'
import { Card } from '../componens/Card'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
    const {loading, users} = useContext(GithubContext)

    return (
        <Fragment>
            <Search/>
            <div className="row">

                {loading
                    ? <p className="text-center">loading</p>
                    : users.map( user => {
                        return (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        )
                    })
                }
            </div>
            
        </Fragment>
    )
}