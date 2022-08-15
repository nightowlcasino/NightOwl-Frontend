import React, { Fragment } from 'react'
import useCollapse from 'react-collapsed'


export default function FAQItem({title, description}) {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <Fragment>
        {/* <Box> */}
            <div id="home-page-hot-wrapper" style={{flex: "none", zIndex: -1}}>
                <div id="home-page-hot">
                    <div id="home-page-hot-border">
                        <div id="home-page-hot-content-background" style={{backgroundColor:'rgba(24,5,80,1)'}}>
                            <div id="home-page-inner-wrapper">
                                <div style={{color: "white", margin: 16}}>
                                    <p {...getToggleProps()} style={{fontSize: "20px", margin: 0, cursor: "pointer"}}>{title}</p>

                                    {/* <Collapse isOpened={isCollapsed}>
                                        <div>Random content</div>
                                    </Collapse> */}
                                    <section style={{marginTop: 8}} {...getCollapseProps()}>
                                        <p>{description}</p>
                                    </section>


                                </div>
                                

                                {/* <Accordion allowToggle width={"100%"}>
                                    <AccordionItem border="none">
                                        <h2>
                                        <AccordionButton px="6" py="4" bgColor="transparent" border={"none"} color="white">
                                            <Box flex='1' textAlign='left' fontSize={"xl"}>
                                            {title}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                        {description}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* </Box> */}
        </Fragment>
    )
}
