const express = require('express');
const router = express.Router();
const urgencyService = require('../Services/urgencyService');


router.get('/',
          (req,res) =>
                    {
                        const urgencies = urgencyService.GetAll();
                        res.status(200).json({
                            meesage: 'Here are all the urgencies',
                            urgencies  
                        });
                    });

router.get('/:id',
          (req, res) => {
                            const { id } = req.params;
                            const urgency = urgencyService.getOne(id);
                            res.status(200).json({
                                                    message: 'Here are your urgency service info',
                                                    urgency
                                                 });
                        } 
           ); 


router.post('/', 
                (req, res) => {
                                let data = {};
                                data = req.body;
                                const confirmation = urgencyService.create(data);
                                res.status(201).json({
                                    message: 'A new service was created :)',
                                    data
                                });
                              }
            );

router.patch('/new-nurse/:urgencyId/:roomId/:nurseId', 
    (req, res) => {
                    const urgencyId = req.params['urgencyId'];
                    const roomId = req.params['roomId'];
                    const nurseId = req.params['nurseId'];
                    const confirmation = urgencyService.updateNurse(urgencyId,roomId,nurseId );
                    if(confirmation === false)
                    {
                        res.status(200).json({
                            confirmation,
                            message: 'Invalid user'
                        });

                    }
                    else{
                            res.status(200).json({
                                confirmation,
                                message: 'Urgency updated'
                            });
                    }
                }
    );

    router.patch('/new-patient/:urgencyId/:roomId/:patientId', 
    (req, res) => {
                    const urgencyId = req.params['urgencyId'];
                    const roomId = req.params['roomId'];
                    const patientId = req.params['patientId'];
                    console.log('params = ' + urgencyId+roomId+patientId);
                    const confirmation = urgencyService.assignPatient(urgencyId,roomId,patientId );
                    if(confirmation === false)
                    {
                        res.status(200).json({
                            confirmation,
                            message: 'Invalid user'
                        });

                    }
                    else{
                            res.status(200).json({
                                confirmation,
                                message: 'Urgency updated'
                            });
                    }
                }
    );

    router.delete('/:id', 
        (req, res) => 
        {
            const {id} = req.params;
            const confirmation = urgencyService.delete(id);
            res.status(200).json({
                confirmation,
                message: 'Urgency Service Deleted'
            });
        });

module.exports = router;