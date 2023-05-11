import React from "react";
import DateTime from "./DateTime";
import moment from "moment/moment";

const Hoc = (Component) => (props) => {
    const now = new Date();
    const date = new Date(props.date);
    const hours = ((now - date) / 1000 / 60 / 60).toFixed(1);
    let result;

    if (hours > 1) result = "5 часов назад";
    if (hours < 1) result = "12 минут назад";
    if (hours > 24) result =`${(hours / 24).toFixed()} дней назад`;

    return (
        <Component date = {result} />
    )
}


export const DateTimePretty = Hoc(DateTime);
