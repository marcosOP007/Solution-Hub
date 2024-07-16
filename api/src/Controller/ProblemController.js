const Problem = require('../models/problem');

async function getAllProblems() {
    try {
        return await Problem.findAll();
    } catch (error) {
        console.error('Error fetching problems:', error.message);
    }
}

async function createProblem(problemData) {
    try {
        return await Problem.create(problemData);
    } catch (error) {
        console.error('Error creating problem:', error.message);
    }
}

async function getProblemById(problemId) {
    try {
        const problem = await Problem.findByPk(problemId);
        if (!problem) throw new Error('Problem not found.');
        return problem;
    } catch (error) {
        console.error('Error fetching problem by ID:', error.message);
    }
}

async function updateProblem(problemId, problemData) {
    try {
        const [updated] = await Problem.update(problemData, {
            where: { id: problemId },
        });
        if (!updated) throw new Error('Problem not found.');
        return 'Problem successfully updated.';
    } catch (error) {
        console.error('Error updating problem:', error.message);
    }
}

async function deleteProblem(problemId) {
    try {
        const deleted = await Problem.destroy({
            where: { id: problemId },
        });
        if (!deleted) throw new Error('Problem not found.');
        return 'Problem successfully deleted.';
    } catch (error) {
        console.error('Error deleting problem:', error.message);
    }
}

module.exports = {
    getAllProblems,
    createProblem,
    getProblemById,
    updateProblem,
    deleteProblem,
};
