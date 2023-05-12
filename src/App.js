import React from 'react';
import VideoList from './components/VideoList';
import moment from 'moment/moment';
import './App.css';

export default function App() {
    const list = [
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment(new Date())
            .subtract(10, "minutes")
            .format("YYYY-MM-DD HH:mm:ss")
            .toString(),
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment(new Date())
            .subtract(65, "minutes")
            .format("YYYY-MM-DD HH:mm:ss")
            .toString(),
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment(new Date())
            .subtract(28, "hours")
            .format("YYYY-MM-DD HH:mm:ss")
            .toString(),
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ];

    return (
        <VideoList list={list} />
    );
}
