import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    const { data } = props;

    return (
        <div className="expenses">
            {data.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}/>
            ))}
        </div>
    );
};

export default Expenses;
