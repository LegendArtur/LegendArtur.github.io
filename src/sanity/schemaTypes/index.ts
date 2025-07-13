import {type SchemaTypeDefinition} from 'sanity'

import {experience} from './experience'
import {skill} from './skill'
import {project} from './project'
import {profile} from './profile'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [profile, experience, skill, project],
}
