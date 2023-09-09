const urgencyDB = {
                    uId1:
                    {
                        name: "Triage",
                        room: {
                                r1: { 
                                        status : 0,
                                        level: "Green",
                                        nurseName : "" ,
                                        patientName : ""
                                    },
                                r2: { 
                                        status : 0,
                                        level: "Green",
                                        nurseName : "" ,
                                        patientName : ""
                                    },
                                r3: { 
                                        status : 0,
                                        level: "Yellow",
                                        nurseName : "" ,
                                        patientName : ""
                                    }, 
                                r4: { 
                                        status : 0,
                                        level: "Yellow",
                                        nurseName : "" ,
                                        patientName : ""
                                    }
                                }

                    },
                    uId2:
                    {
                        name: "Shock",
                        room: {
                                r1: { 
                                        status : 0,
                                        level: "Pathology",
                                        nurseName : "" ,
                                        patientName : ""
                                    },
                                r2: { 
                                        status : 0,
                                        level: "Specialty",
                                        nurseName : "" ,
                                        patientName : ""
                                    },
                                }

                    },
                    uId3:
                    {
                        name: "Short Period",
                        room: {
                                r1: { 
                                        status : 0,
                                        nurseName : "" ,
                                        patientName : ""
                                    },
                                r2: { 
                                        status : 0,
                                        nurseName : "" ,
                                        patientName : ""
                                    },
                                r3: { 
                                        status : 0,
                                        nurseName : "" ,
                                        patientName : ""
                                    }, 
                                r4: { 
                                        status : 0,
                                        nurseName : "" ,
                                        patientName : ""
                                    }
                                }

                    },
                }

module.exports = urgencyDB;