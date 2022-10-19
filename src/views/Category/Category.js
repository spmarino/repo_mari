import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';

import { db } from '../../firebase/firebaseConfig';

//LINK ROUTER DOM
import { Link } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from 'firebase/firestore';


const Category = () => {
	const [itemData, setItemData] = useState([]);


	const { category } = useParams();

	useEffect(() => {
		const getItems = async () => {
			const q = query(collection(db, 'items'), where('category', '==', category));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setItemData(docs);
		};
		getItems();
	}, [category]);

	return (
        <div className='d-flex flex-wrap justify-content-center'>
			{itemData.map((item) => {
				return (
					<Link to={`/detail/${item.id}`} key={item.id} className="text-decoration-none" >
						<ItemCard itemsData={item} />
					</Link>
				)
			})}
		</div>
    );
};

export default Category;
