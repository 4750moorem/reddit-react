import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import { SubReddit } from "../data/SubReddit";
import {getPopularSubReddits} from "../effects/manageReddit";
import SubRedditRow from "./SubRedditRow";
import {AppContext, AppContextProps} from "./App";


function Home() {
    const [subreddits, setSubReddits] = useState<SubReddit[]>([])
    const appContext : AppContextProps = useContext(AppContext)
    useEffect(() => {
        appContext.setPageTitle("Home - Popular Subreddits ")
        getPopularSubReddits().then((res) => {
            setSubReddits(res)
        })
    },[])

    return (
        <div className="App">
            <div className="list">
                {subreddits.map((s, index) => {
                    return (
                        <SubRedditRow key={index} subReddit={s}></SubRedditRow>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Home;
