const Problem = require('../models/problem');

// Função para pegar todos problemas
async function getAllProblems() {
    return await Problem.findAll();
}

// Função para criar um novo problema
async function createProblem(problemData) {
    return await Problem.create(problemData);
}

// Função para obter detalhes de um problema pelo ID
async function getProblemById(problemId) {
    const problem = await Problem.findByPk(problemId);
    if (!problem) throw new Error('Usuário não encontrado.');
    return problem;
}

// Função para atualizar um problema pelo ID
async function updateProblem(problemId, problemData) {
    const [updated] = await Problem.update(problemData, {
        where: { id: problemId },
    });

    if (!updated) throw new Error('Problema não encontrado.');
    return 'Problema atualizado com sucesso.';
}

// Função para excluir um problema pelo ID
async function deleteProblem(problemId) {
    const deleted = await Problem.destroy({
        where: { id: problemId },
    });

    if (!deleted) throw new Error('Usuário não encontrado.');
    return 'Usuário excluído com sucesso.';
}



module.exports = {
    getAllProblems,
    createProblem,
    getProblemById,
    updateProblem,
    deleteProblem,

  };
  