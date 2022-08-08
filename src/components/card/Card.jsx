import { motion } from 'framer-motion';
import { useState } from 'react';
import './Card.css';

const Card = ({ img, title, detail, link }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            transition={{ layout: { type: "spring", duration: 1 } }}
            layout
            onClick={() => setIsOpen(!isOpen)}
            className='card'>
            <motion.span
                className='c-title'
                layout="position">
                {title} 🚀
            </motion.span>
            {isOpen && (
                <motion.div
                    className='c-detail'
                    layout="position"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <img src={img} alt={title} />
                    <motion.div className='c-detail-text'>
                    <span>{detail}</span>
                    <br/>
                    <a href={link} target="_blank">Más información.</a>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>

    )
}

export default Card;