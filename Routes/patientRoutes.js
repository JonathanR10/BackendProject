const express = require('express');
const router = express.Router();
const patientService = require('../Services/patientService');


router.get('/',
          (req,res) =>
                    {
                        const patients = patientService.GetAll();
                        res.status(200).json({
                            meesage: 'Here are all the patients',
                            patients  
                        });
                    });


router.get('/:id',
          (req, res) => {
                            const { id } = req.params;
                            const patient = patientService.getOne(id);
                            res.status(200).json({
                                                    message: 'Here are your patient info',
                                                    patient
                                                 });
                        } 
           ); 

router.post('/', 
           (req, res) => {
                            let data = {};
                            data = req.body;
                            const confirmation = patientService.create(data);
                            res.status(201).json({
                                message: "New patient created",
                                data
                            });
                         }
                );

router.patch('/new-diagnosis/:id', 
    (req, res) => {
                    const {id} = req.params;
                    const {diagnosis} = req.body;
                    const confirmation = patientService.updateDiagnosis(id,diagnosis);
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
                                                    message: 'Diagnosis updated'
                                                });
                    }
                }
        );

router.delete('/:id', 
        (req, res) => 
                    {
                        const {id} = req.params;
                        const confirmation = patientService.delete(id);
                        res.status(200).json({
                            confirmation,
                            message: 'User Deleted'
                        });
                    });

module.exports = router;