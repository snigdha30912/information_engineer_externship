import React from "react";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText,CCardFooter,CButton } from "@coreui/react";


/*
Created the card component which displays the id, name in the form of cards
*/

export default function OutlinedCard({ card , loading}) {

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <CCard style={{ width: '21rem' }}>
  <CCardImage orientation="top" src="https://cdn.dribbble.com/users/1626229/screenshots/16311321/media/1f01f74a5ea533ec7e1ab279ebff3847.jpg" />
  <CCardBody>
    <CCardTitle style={{fontSize:'16px'}}>ID {card.id}</CCardTitle>
    <CCardText style={{fontSize:'12px',color:"#DC143C"}}>
    Name : {card.name}
    </CCardText>
  </CCardBody>
</CCard>
  );
}

