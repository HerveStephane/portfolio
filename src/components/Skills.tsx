import { useTranslation } from 'react-i18next';
import {
  SiArgo, SiKubernetes, SiDocker, SiHelm, SiDotnet, SiCplusplus, SiTypescript,
  SiReact, SiGithub, SiGit, SiRaspberrypi, SiArduino, SiQt,SiEnterprisedb
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { FaBusinessTime, FaProjectDiagram } from 'react-icons/fa';

const skillsConfig = {
  cloud: [
    { key: 'argocd', Icon: SiArgo },
    { key: 'kubernetes', Icon: SiKubernetes },
    { key: 'docker', Icon: SiDocker },
    { key: 'helm', Icon: SiHelm },
    { key: 'harbor', Icon: SiDocker },
  ],
  programming: [
    { key: 'csharp', Icon: SiDotnet },
    { key: 'cpp', Icon: SiCplusplus },
    { key: 'typescript', Icon: SiTypescript },
    { key: 'react', Icon: SiReact },
  ],
  management: [
    { key: 'businessStrategy', Icon: FaBusinessTime },
    { key: 'intrapreneurship', Icon: SiEnterprisedb },
    { key: 'management', Icon: FaBusinessTime },
  ],
  architecture: [
    { key: 'architectureDesign', Icon: SiDotnet },
    { key: 'patterns', Icon: SiDotnet },
    { key: 'systemArchitecture', Icon: SiDotnet },
    { key: 'solid', Icon: SiDotnet },
    { key: 'designPatterns', Icon: SiDotnet },
    { key: 'webservices', Icon: SiDotnet },
  ],
  tools: [
    { key: 'github', Icon: SiGithub },
    { key: 'git', Icon: SiGit },
    { key: 'azure', Icon: VscAzureDevops },
  ],
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">{t('skills.heading')}</h2>

      {Object.entries(skillsConfig).map(([categoryKey, skills]) => (
        <div key={categoryKey} className="mb-14">
          <h3 className="text-2xl font-semibold mb-8 border-b-2 border-blue-600 inline-block pb-2">
            {t(`skills.categories.${categoryKey}`)}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map(({ key, Icon }) => (
              <div
                key={key}
                className="flex items-center space-x-4 p-4 border rounded-xl shadow hover:shadow-lg transition"
              >
                <Icon className="w-12 h-12 text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold">{t(`skills.items.${key}.name`)}</h4>
                  {t(`skills.items.${key}.description`) && (
                    <p className="text-sm text-gray-600">{t(`skills.items.${key}.description`)}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
