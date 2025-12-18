
import Card from "../components/Card";

const Projects = () => {
  return (
    <div>
      <h1>Projects & Experience</h1>

      <Card
        title="Frontend Development Intern - MIEW"
        date="Feb 2025 - Jul 2025"
        description="Designed and implemented a modular TypeScript utility library to improve code reuse and maintainability across frontend projects."
        items={[
          "Reduced code duplication and inconsistent implementations",
          "Built a React demo component for internal presentations",
          "Wrote complete technical documentation using Docusaurus"
        ]}
        link="https://www.npmjs.com/package/@jonasantunes/utility_lib_miew"
        buttonText="View Project"
      />

      <Card
        title="TypeScript Utility Library (Open Source)"
        description="Published an open-source utility library on NPM focused on improving consistency and maintainability in frontend codebases."
        link="https://www.npmjs.com/package/@jonasantunes/utility_lib_miew"
        buttonText="View Project"
      />
    </div>
  );
};

export default Projects;
