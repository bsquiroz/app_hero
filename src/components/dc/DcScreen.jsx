import React from "react";
import { HeroList } from "../heros/HeroList";

export const DcScreen = () => {
    return (
        <div>
            <h2>DcScreen</h2>
            <HeroList publisher={"DC Comics"} />
        </div>
    );
};
