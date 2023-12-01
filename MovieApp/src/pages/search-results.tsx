import { CardProps } from "#ui/cards/card-props";
import { useEffect, useState } from "react";
import { cardArray } from "../arrayData";
import { MainTemplate } from "#ui/templates/main-template";
import { Title } from "#ui/title/title";
import { Menu } from '#ui/header/menu';
import { ListSearchResults } from "#ui/list-posts/list-search-results";

export const SearchResults: React.FC = () => {
    const [apiModels, setApiModels] = useState<CardProps[] | null>(null);
    useEffect(()=>{
     const TimerId =setTimeout(()=>{setApiModels(cardArray)}, 3000); return () => {
       clearTimeout(TimerId);
     };
    }, [])
   return (
     <MainTemplate
       header={<Menu />}
       title={<Title>Search result</Title>}
       body={apiModels? <ListSearchResults value={cardArray}></ListSearchResults>:null}
     />
   );
 };