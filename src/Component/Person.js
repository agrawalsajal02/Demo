import React from "react";
import AdaptiveCard from "react-adaptivecards";
import "./person.css"


class Person extends React.Component {
  render() {
  
    let card = {
      type: "AdaptiveCard",
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      version: "1.2",
      body: [
        {
          type: "Container",
          items: [
            {
              type: "ColumnSet",
              columns: [
                {
                  type: "Column",
                  width: "auto",
                  items: [
                    {
                      type: "TextBlock",
                      text: "Ongoing Care Protocols",
                      size: "Medium",
                      color: "Dark",
                      weight: "Bolder",
                      wrap: true,
                    },
                  ],
                },
                {
                  type: "Column",
                  width: "20px",
                  backgroundImage: {
                    url:
                      "https://www.iconsdb.com/icons/preview/color/E8E8E8/square-rounded-xxl.png",
                  },
                  items: [
                    {
                      type: "TextBlock",
                      text: "2",
                      horizontalAlignment: "center",
                      size: "small",
                      weight: "bolder",
                    },
                  ],
                  minHeight: "10px",
                  height: "stretch",
                  spacing: "Small",
                },
              ],
            },
          ],
        },

        {
          type: "Container",
          separator: true,
          items: [
            {
              type: "TextBlock",
              text:
                "Initiation and Engagement of Alcohol and Other Drug Abuse or Dependance Treatment (IET)",
              wrap: true,
              spacing: "None",
            },
            {
              type: "ColumnSet",
              columns: [
                {
                  type: "Column",
                  width: "auto",
                  items: [
                    {
                      type: "TextBlock",
                      text: "Assigned on 03/28/2020",
                      color: "Dark",
                      weight: "Lighter",
                      spacing: "Small",
                      fontType: "Default",
                      size: "Small",
                      wrap: true,
                    },
                  ],
                },

                {
                  type: "Column",
                  width: "auto",
                  items: [
                    {
                      type: "Image",
                      url:
                        "https://www.iconsdb.com/icons/preview/gray/circle-xxl.png",
                      backgroundColor: "grey",
                      width: "11px",
                      height: "10px",
                      spacing: "small",
                      horizontalAlignment: "Center",
                    },
                  ],
                },
                {
                  type: "Column",
                  width: "stretch",
                  items: [
                    {
                      type: "TextBlock",
                      text: "Coached by GUPTA ,HIMANSHU",
                      size: "Small",
                      weight: "Lighter",
                      spacing: "small",
                      wrap: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
    return (
      <div  className="main_section_insight">
     
        <AdaptiveCard
        
      
          payload={card}
        />
      </div>
    );
  }
}

export default Person;