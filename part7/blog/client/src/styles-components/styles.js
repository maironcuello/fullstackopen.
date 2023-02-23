import styled from 'styled-components';

export const HeaderStyle = styled.div`
	background: rgb(147, 230, 252);
	width:80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
	gap:1rem;
`;

export const ContainerStyle = styled.div`
	width: 100rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	`;


export const FormStyle = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: .5rem;

	input {
		width:30rem;
		height: 3rem;
	}
	button {
		background-color: rgb(43, 134, 46);
	  	color: white;
	  	font-weight: 600;
	  	font-size: 1.5rem;
	  	padding: .5rem 2	.5rem;
	  	border: none;
	  	border-radius: .2rem;
}
`;

export const LoginSlyle = styled.form`
	background-color: rgb(147, 230, 252);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: .5rem;
	padding: 5rem;
	
	input {
		width:30rem;
		height: 3rem;
	}
	button {
		background-color: rgb(43, 134, 46);
		color: white;
		font-weight: 600;
		font-size: 1.5rem;
		padding: 1rem 2.5rem;
		border: none;
		border-radius: .3rem;
	}
	`;
export const ContendStyle = styled.div`
	background-color: rgb(239, 197, 65);
	width: 80%;
	height: 40rem;
	/* border: .5rem solid; */
`;