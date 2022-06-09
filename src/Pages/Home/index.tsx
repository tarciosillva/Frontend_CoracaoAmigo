import React from "react"

import { PageContanier, ContentPage } from "../../Components/styledComponentsCss"
import { GridColumn } from "./style"

import ContentMenu from "../../Components/ContentMenu"
import CardInformation from "./Components/CardInformation"
import BarChart from "./Components/BarChart"
import PieChart from "./Components/PieChart"



const Home: React.FC = () => {


    return (
        <PageContanier>
            <ContentMenu />
            <ContentPage>
                <GridColumn columns="1fr 1fr 1fr">
                    <CardInformation backgroundColor="#076461" cardTitle="Famílias em atendimento" Total="2" textTotal="Ativos" />
                    <CardInformation backgroundColor="#0a837f" cardTitle="Total de atendimentos em 2022" Total="25" textTotal="Atendimentos" />
                    <CardInformation backgroundColor="#ffbc11" cardTitle="Voluntários ativos" Total="3" textTotal="Voluntários" />
                </GridColumn>

                <GridColumn columns="1fr 2fr">
                    <PieChart />
                    <BarChart />
                    {/* <ListOfEmergency /> */}

                </GridColumn>
            </ContentPage>
        </PageContanier>
    )
}

export default Home