import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/GlobalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

export default function Income() {
  const { addIncome, incomes, getIncomes } = useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>

        <div className="income-content">
          <div className="form-container"></div>
          <div className="incomes">
            {incomes.map((income) => {
              const {
                _id,
                title,
                amount,
                date,
                category,
                description,
              } = income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor="var(--color-green)"
                />
              );
            })}
            <Form></Form>
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div``;
