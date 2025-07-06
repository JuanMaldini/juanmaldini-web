import './ProjectSelector.css';

type ProjectSelectorProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function ProjectSelector({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: ProjectSelectorProps) {
  return (
    <div className="project-selector">
      {categories.map((category) => (
        <button
          key={category}
          className={`selector-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category.replace(/_/g, ' ')}
        </button>
      ))}
    </div>
  );
}
