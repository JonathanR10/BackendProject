const express =  require ('express');
const router = express.Router();
const Services = require('../Services/nurseService');


router.get('/',
            (req, res) => {
                            const nurses = Services.GetAll();
                            res.status(200).json(
                                                {
                                                    message: 'Here are your nurses info',
                                                    nurses
                                                }
                                                )
                          } 
            );       

router.get('/:id',
                (req, res) => {
                                const { id } = req.params;
                                const nurse = Services.getOne(id);
                                res.status(200).json({
                                                        message: 'Here are your nurse info',
                                                        nurse
                                                    });
                              } 
          ); 

router.post('/', 
                (req, res) => {
                                let data = {};
                                data = req.body;
                                const confirmation = Services.create(data);
                                res.status(201).json({
                                    message: 'A new nurse was created :)',
                                    data
                                });
                              }
            );

router.patch('/new-name/:id', 
             (req, res) => {
                                const {id} = req.params;
                                const {name} = req.body;
                                const confirmation = Services.updateNurseName(id,name);
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
                                            message: 'User name updated'
                                        });
                                }
                            }
             );

router.delete('/:id', 
        (req, res) => 
        {
            const {id} = req.params;
            const confirmation = Services.delete(id);
            res.status(200).json({
                confirmation,
                message: 'Nurse  Deleted'
            });
        });

module.exports = router;