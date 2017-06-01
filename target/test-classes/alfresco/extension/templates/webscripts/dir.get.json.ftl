{ 
  "server" : "Alfresco ${server.edition} Edition v${server.version}",
  "folder" :
  {
    "path" : "${folder.displayPath}",
    "name" : "${folder.name}" 
  },
  "children" : [
    <#list total_list as child>
    {
        "isfolder" : <#if child.child.isContainer>true<#else>false</#if>,
        <#if verbose>
        "modifier" : "${child.child.properties.modifier}",
        "size" :    ${child.size},
        "modified" : "${child.child.properties.modified?date}",
        </#if>
        "name" : "${child.child.name}"
    }
  </#list>
  ]
}