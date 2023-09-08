const express =  require ('express');
const router = express.Router();
const Services = require('../Services/customerService');


router.get('/',
            (req, res) => {
                const customers = Services.GetAll();
                res.status(200).json(
                    {
                        message: 'Here are your clients',
                        customers
                    }
                )
            } );

       

router.get('/:id',
(req, res) => {
    const { id } = req.params;
    const customer = Services.getOne(id);
    res.status(200).json({
        message: 'Here are your client',
        customer
    }
    )
} ); 

router.post('/', 
    (req, res) => {
        let data = {};
        data = req.body;
        const confirmation = Services.create(data);
        res.status(201).json({
            confirmation,
            data
        });
    }
);

router.patch('/new-name/:id', 
    (req, res) => {
        const {id} = req.params;
        const {name} = req.body;
        console.log(req.body);
        const confirmation = Services.updateCustomerName(id,name);
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
            console.log(req.params);
            const confirmation = Services.delete(id);
            res.status(200).json({
                confirmation,
                message: 'User Deleted'
            });
        });

module.exports = router;