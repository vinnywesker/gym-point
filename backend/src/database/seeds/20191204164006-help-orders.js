module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'help_orders',
      [
        {
          student_id: '1',
          question: 'Oi, essa acad deixa giga biga?',
          answer: 'Com certeza, jovem gafanhoto. Birl!',
          answer_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};