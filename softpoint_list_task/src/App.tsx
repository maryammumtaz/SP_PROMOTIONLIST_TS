import React, {useState} from 'react';
import logo from './logo.svg';
import { TabPanel, TabContext, TabList } from '@mui/lab'
import PermIdentity from '@mui/icons-material/PermIdentity'
import WorkOutline from '@mui/icons-material/WorkOutline'
import Tab from '@mui/material/Tab'
import { Grid } from '@mui/material'
import Header from './components/header'
import Footer from './components/footer'
import AllPromotions from './components/allPromotions';
import NewCustomerPromotions from './components/newCustomerPromotions';

function App() {
   const [tabValue, settabValue] = useState<any>("0")

  const handleChange = (event:any, newValue:any) => {
    settabValue(newValue)
  }

  return (
    <div className="App">
      
       <Header /> 
      <Grid
        container
        columnSpacing={1}
        alignContent="center"
        justifyContent="center"
        marginTop="70px"
      >
        <TabContext value={tabValue}>
          <Grid container justifyContent="center">

            <TabList onChange={handleChange}>
              <Tab value="0" icon={<WorkOutline />} label="All Promotions" />
              <Tab value="1" icon={<PermIdentity />} label="New Customer" />
            </TabList>
          </Grid>
          <Grid container justifyContent="center" xs={12}>
            <TabPanel value="0">
               <AllPromotions /> 
            </TabPanel>
            <TabPanel value="1">
               <NewCustomerPromotions /> 
            </TabPanel>
          </Grid>


        </TabContext>
      </Grid>
    <Footer />
    
    </div>
  );
}

export default App;
