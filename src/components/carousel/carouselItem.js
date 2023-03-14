import React from "react";
import './styles.css'
const CarouselItem = ({translationFunction, tool}) => {
	var t = translationFunction
	return (
		<div>
			{console.log("tool", tool)}
			<div className="tool-logo">
			{tool.logo && <img src={tool.logo} alt="DodfMiner Logo"/>}
			</div>
			<div className="tool-info">
				<h2>{t(tool.name)}</h2>
				{tool.subtitle && <h3>{t(tool.subtitle)}</h3>}
				<p>{t(tool.description)}</p>
			</div>
			<div className="tool-links">
				{tool.url && <a href={tool.url}>{t(tool.name)}</a>}
				{tool.documentation && <a href={tool.documentation}>{t('Documentation')}</a>}
				{tool.article && <a href={tool.article}>{t('Reference Article')}</a>}
				<a href={tool.github}>{t('Repository')}</a>
			</div>
		</div>
	)
}
export default CarouselItem;
