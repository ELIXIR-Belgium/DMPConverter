const data = {
    Questions: {
        nameApplicant: "[FWO] Name applicant.",
        projectNumber: "[FWO, ERC, H2020] Project number.",
        projectTitle: "[FWO, H2020] Project title.",
        projectAcronym: "[ERC, H2020] Project acronym.",
        affiliation: "[FWO] Affiliation",
        
        versionNumber: "[H2020] Version number.",
        versionChanges: "[H2020] Changes in this version.",
        dateFirstVersion: "[H2020] Completition date of first version.",
        lastUpdate: "[H2020] Date of last update.",
        
        newExistingData: "[FWO, ERC, H2020] Will you generate/collect new data and/or make use of existing data? Specify how you will use existing data.",
        datasetsList: "[ERC] Name and list here all datasets that will be used and/or generated in this project. Add a reference for existing datasets.",
        datasetsPurpose: "[H2020] Per dataset, state its purpose, explain the relation to the objectives of the project, specify to whom it will be useful.",
        datasetsOrigin: "[FWO, ERC, H2020] Per dataset, state its origin/source.",
        datasetsTypeFormat: "[FWO, ERC, H2020] Per dataset, state digital format(s) of raw and processed data files, distinguishing proprietary from open format(s).",
        formatSoftware: "[ERC, H2020] What methods or software tools are needed to access data files in proprietary format? Is documentation about the software needed to open the data file provided in the metadata? Is it possible to provide the relevant software (e.g. in open source code)?",
        datasetsVolume: "[FWO, ERC, H2020] Per dataset, state its expected volume at the end of the project.",
        
        datasetsSharing: "[FWO, ERC, H2020] Which datasets will be shared and made available (for the society) after the end of the project? Distinguish open access datasets from restricted or closed access datasets.",
        sharingRational: "[FWO, ERC, H2020] Are there any factors restricting or preventing the sharing of (some of) the data? Per dataset with restricted or closed access, provide a rationale for doing so.",
        sharingRepos: "[FWO, ERC, H2020] Per dataset, list the repositories in which data, metadata, code, software and related documentation will be shared. If research materials and protocols will be shared in centralised repositories, specify it below.",
        accessProcedure: "[FWO, ERC, H2020] Per dataset with restricted access, explain how access will be provided (under what conditions or procedure).",
        datasetsEmbargo: "[FWO, ERC, H2020] Per dataset, state when it will be made available. Is embargo foreseen?",
        datasetsLicense: "[ERC, H2020] Per dataset, state how it will be licensed to permit the widest re-use possible. If the re-use of some data is restricted, explain why and specify the length of time for which the data will remain re-usable.",
        
        
        datasetsMetadata: "[FWO, ERC, H2020] Will a metadata scheme be used? Per dataset, state the standard metadata or the customized metadata schemes that will be used.",
        datasetsIdentifier: "[ERC, H2020] Do you make use of persistent identifiers or unique identifiers such as Digital Object Identifiers (DOI)?",
        datasetsOntology: "[ERC, H2020] Will you use a controlled vocabulary or standard ontology to describe your data? Per dataset, state the standard ontologies you will use or the mapping of your vocabulary to standard ontologies.",
        datasetsDocs: "[FWO, H2020] What documentation will be provided to enable understanding and reuse of data collected/generated in this project?",
        
        costsFair: "[H2020] What are the estimated costs for making data more FAIR (Findable, Accessible, Interoperable, Reusable)?",
        costsFairCover: "[H2020] How will these costs (for making data FAIR) be covered?",
        costSharing: "[FWO, ERC, H2020] What are the expected costs for data sharing and reuse?",
        costSharingCover: "[FWO, ERC, H2020] How will these costs (for data sharing and reuse) be covered?",
        
        storageDuringWhere: "[FWO, ERC, H2020] Where will the data be stored during the project?",
        storageDuringFrequency: "[FWO, ERC, H2020] What is the backup strategy?",
        storageDuringAvailability: "[FWO] Is there currently sufficient storage & backup capacity during the project? If yes, specify concisely. If no or insufficient storage or backup capacities are available, then explain how this will be taken care of.",
        costDuring: "[FWO, ERC, H2020] What are the expected costs for data storage and backup during the project?",
        costDuringCover: "[FWO, ERC, H2020] How will these costs (for data storage and backup during the project) be covered?",
        securityDuring: "[FWO, ERC, H2020] Data security: how will you ensure that the data are securely stored (not accessed or modified by unauthorised persons), especially for sensitive data.",
        
        datasetsListArchiving: "[FWO, ERC, H2020] List which datasets will be preserved or not, for at least 5-10 years after the end of the project and explain why (legal, contractual restrictions etc..).",
        ArchivingWhere: "[FWO, ERC, H2020] Where will datasets be stored for long term (archived) after the end of the project?",
        CostsArchiving: "[FWO, ERC, H2020] Estimate the costs for long term preservation (or archiving).",
        CostsArchivingCover: "[FWO, ERC, H2020] How will these costs (for long term preservation) be covered?",
        SecurityArchiving: "[ERC, H2020] Data security: are the datasets safely stored in repositories for long term preservation and curation?",
        
        RespDataQuality: "[ERC, H2020] Describe data quality assurance processes and who will be responsible for it.",
        RespDataDoc: "[FWO, H2020] Who will be responsible for the data documentation and metadata?",
        RespDataStorage: "[FWO, H2020] Who will be responsible for data storage and backup during the project?",
        RespDataArchiving: "[FWO, H2020] Who will be responsible for ensuring data preservation and sharing?",
        RespDMP: "[FWO, H2020] Who bears the end responsibility for updating and implementing this DMP?",
        
        PersonalData: "[FWO, H2020] Will you use personal/sensitive data? If so, shortly describe the kind of personal data you will use AND add the reference to your file in your host institution's privacy register.",
        EthicalIssue: "[FWO, H2020] Are there any ethical issues concerning the creation and/or use of the data (e.g. experiments on humans or animals, dual use)? If so, add the reference to the formal approval by the relevant ethical review committee(s).",
        IntellectualProperty: "[FWO] Will Intellectual property restrictions be claimed for your data? If so, for what data and which restrictions will be asserted?",
        LegalIssue: "[FWO] Do existing 3rd party agreements restrict dissemination or exploitation of the data you (re)use? If so, to what data do they relate and what restrictions are in place?",
        other: "[H2020] Indicate whether other national/funder/sectorial/departmental procedures for data management are used."
        
    },
    fwo: {
        sections: {
            projectInfo: {
                nameApplicant: "Name applicant",
                projectNumber: ["FWO Project Number & title"],
                projectTitle: ["FWO Project Number & title"],
                affiliation: "Affiliation",
            },
            dataDescription: {
                newExistingData: "Will you generate/collect new data and/or make use of existing data?",
                datasetsOrigin: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets origin:"],
                datasetsTypeFormat: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets type and format(s):"],
                datasetsVolume: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets volume:"],
            },
            dataSharing: {
                datasetsSharing: "Which data will be made available after the end of the project?",
                sharingRational: "Are there any factors restricting or preventing the sharing of (some of) the data (e.g. as defined in an agreement with a 3rd party, legal restrictions)?",
                sharingRepos: "Where/how will the data be made available for reuse? ",
                accessProcedure: "Who will be able to access the data and under what conditions?",
                datasetsEmbargo: "When will the data be made available?",
                costSharing: "What are the expected costs for data sharing? How will these costs be covered?",
                costSharingCover: "What are the expected costs for data sharing? How will these costs be covered?"
            },
            documentation: {
                datasetsMetadata: "Will a metadata standard be used? Describe in detail which standard will be used.  If not, state in detail which metadata will be created to make the data easy/easier to find and reuse.",
                datasetsDocs: "What documentation will be provided to enable understanding and reuse of data collected/generated in this project?",
            },
            storage: {
                storageDuringWhere: "Where will the data be stored?",
                storageDuringFrequency: "How will the data be backed up?",
                storageDuringAvailability: "Is there currently sufficient storage & backup capacity during the project? If yes, specify concisely. If no or insufficient storage or backup capacities are available, then explain how this will be taken care of.",
                costDuring: ["What are the expected costs for data storage and backup during the project? How will these costs be covered?","Costs for storage and backup:"],
                costDuringCover: ["What are the expected costs for data storage and backup during the project? How will these costs be covered?","Funding for storage and backup:"],
                securityDuring: "Data security: how will you ensure that the data are securely stored (not accessed or modified by unauthorized persons), especially for sensitive data.",
            },
            dataPreservation: {
                datasetsListArchiving: "Which data will be retained for the expected 5 year period after the end of the project? In case only a selection of the data can/will be preserved, clearly state the reasons for this (legal or contractual restrictions, physical preservation issues, …)",
                ArchivingWhere: "Where will these data be archived (=stored for the long term)?",
                CostsArchiving: ["What are the expected costs for data preservation during these 5 years? How will the costs be covered?","Costs for archiving:"],
                CostsArchivingCover: ["What are the expected costs for data preservation during these 5 years? How will the costs be covered?","Funding for archiving:"],
            },
            responsibilities: {
                RespDataDoc: "Who will be responsible for the data documentation and metadata?",
                RespDataStorage: "Who will be responsible for data storage and backup during the project?",
                RespDataArchiving: "Who will be responsible for ensuring data preservation and sharing?",
                RespDMP: "Who bears the end responsibility for updating and implementing this DMP?"
            },
            ethical: {
                PersonalData: "Will you use personal/sensitive data? If so, shortly describe the kind of personal data you will use AND add the reference to your file in your host institution's privacy register.",
                EthicalIssue: "Are there any ethical issues concerning the creation and/or use of the data (e.g. experiments on humans or animals, dual use)? If so, add the reference to the formal approval by the relevant ethical review committee(s).",
                IntellectualProperty: "Does your work possibly result in research data with potential for tech transfer and valorization? Will IP restrictions be claimed for the data you created? If so, for what data and which restrictions will be asserted?",
                LegalIssue: "Do existing 3rd party agreements restrict dissemination or exploitation of the data you (re)use? If so, to what data do tåhey relate and what restrictions are in place?"
            }
        }
    },
    erc: {
        sections: {
            projectInfo: {
                projectNumber: "Project number",
                projectAcronym: "Project acronym",
            },
            
            summary: {
                newExistingData: ["collected/generated dataset", "New/Existing data:"],
                datasetsList: ["dataset reference and name", "Datasets list:"],
                datasetsOrigin: ["dataset origin", "Datasets origin:"],
                datasetsTypeFormat: ["data type and format", "Datasets type and format(s):"],
                datasetsVolume: ["dataset expected size", "Datasets volume:"],
            },
            makingDataOpenlyAccessible: {
                formatSoftware: ["How the data can be accessed", "Software for file format(s):"],
                datasetsSharing: ["which data will be made openly available? which data will remain closed", "Access type per datasets:"],
                sharingRational: ["the reasons for not giving access", "Reasons for restricting access to datasets:"],
                sharingRepos: ["Where data are deposited. Where associated metadata and documentation are deposited. Where code are deposited", "Repositories list per dataset:"],
                accessProcedure: ["permission(+format)", "Access procedures per dataset:"],
                
            },
            increaseDataReuse: {
                datasetsEmbargo: ["Is embargo forseen?", "Datasets releasing date:"],
                datasetsLicense: ["How data is licensed. What data will remain re-usable and for how long.", "Datasets' license:"],
                RespDataQuality: ["data quality assurance procedures", "Data quality assurance:"],
            },
            makingDataFindable: {
                datasetsMetadata: ["dataset description: metadata", "Use of metadata schema:"],
                datasetsIdentifier: ["dataset description: persistent and unique identifiers, DOI", "Use of identifier:"],
            },
            makingDataInteroperable: {
                datasetsOntology: ["Which standard or field-specific data and metadata vocabularies and methods will be used", "Use of ontology:"],
            },
            AllocationOfResourcesAndDataSecurity: {
                costSharing: ["Estimated costs for making the project data open access", "Costs for data sharing:"],
                costSharingCover: ["Estimated costs for making the project data open access", "Funding for data sharing costs:"],
                storageDuringWhere: ["Procedure for data backup and recovery", "(Meta)Data Storage:"],
                storageDuringFrequency: ["Procedure for data backup and recovery", "(Meta)Data backup:"],
                costDuring: ["Procedure for data backup and recovery", "Costs for storage and backup:"],
                costDuringCover: ["Procedure for data backup and recovery", "Funding for storage and backup:"],
                securityDuring: ["Procedure for data backup and recovery", "Data security:"],
                datasetsListArchiving: ["secure storage in repositories for long term preservation and curation", "Data archiving:"],
                ArchivingWhere: ["secure storage in repositories for long term preservation and curation", "Archives:"],
                CostsArchiving: ["secure storage in repositories for long term preservation and curation", "Costs for archiving:"],
                CostsArchivingCover: ["secure storage in repositories for long term preservation and curation", "Funding for archiving:"],
                SecurityArchiving: ["secure storage in repositories for long term preservation and curation", "Archive security:"]
            },

        }
    },
    h2020: {
        sections: {
            projectInfo: {
                projectNumber: "Project number",           
                projectTitle: "Project title",
                projectAcronym: "Project acronym",
            },
            
            dmpVersion: {
                versionNumber: "Version number",           
                versionChanges: "Description",
                dateFirstVersion: "Date of the version",
                lastUpdate: "Date of last update",
            },
            
            dataSummary: {
                newExistingData: ["Specify if existing data is being re-used (if any) and how", "New/Existing data:"],           
                datasetsPurpose: ["State the purpose of the data collection/generation. Explain the relation to the objectives of the project. Outline the data utility: to whom will it be useful", "Datasets purpose:"],
                datasetsOrigin: ["Specify the origin", "Datasets origin:"],
                datasetsTypeFormat: ["Specify the types and formats of data generated/collected ", "Datasets type and format(s):"],
                datasetsVolume: ["State the expected size of the data (if known) ", "Datasets volume:"],
            },
            makingDataOpenlyAccessible: {
                formatSoftware: ["Specify what methods or software tools are needed to access the data? Is documentation about the software needed to access the data included? Is it possible to include the relevant software (e.g. in open source code)?", "Software for file format(s):"],
                datasetsSharing: ["Specify which data will be made openly available?", "Access type per datasets:"],
                sharingRational: ["If some data is kept closed provide rationale for doing so (legal, contractual, voluntary)", "Reasons for restricting access to datasets:"],
                sharingRepos: ["Specify how the data will be made available. Specify where the data and associated metadata, documentation and code are deposited", "Repositories list per dataset:"],
                accessProcedure: ["Specify how access will be provided in case there are any restrictions", "Access procedures per dataset:"],
            },
            increaseDataReuse: {
                datasetsEmbargo: ["Specify when the data will be made available for re-use. If applicable, specify why and for what period a data embargo is needed", "Datasets releasing date:"],
                datasetsLicense: ["Specify how the data will be licenced to permit the widest reuse possible. Specify whether the data produced and/or used in the project is usable by third parties, in particular after the end of the project? If the re-use of some data is restricted, explain why. Specify the length of time for which the data will remain re-usable.", "Datasets' license:"],
                RespDataQuality: ["Describe data quality assurance processes", "Data quality assurance:"],
            },
            makingDataFindableIncludingProvisionsForMetadata: {
                datasetsMetadata: ["Outline the discoverability of data (metadata provision). Specify standards for metadata creation (if any). If there are no standards in your discipline describe what type of metadata will be created and how", "Use of metadata schema:"],
                datasetsIdentifier: ["Outline the identifiability of data and refer to standard identification mechanism. Do you make use of persistent and unique identifiers such as Digital Object Identifiers?", "Use of identifier:"],
                datasetsDocs: ["Outline naming conventions used. Outline the approach towards search keyword. Outline the approach for clear versioning.", "Shared documentation about datasets:"],
            },
            makingDataInteroperable: {
                datasetsOntology: ["Specify whether you will be using standard vocabulary for all data types present in your data set, to allow inter-disciplinary interoperability? If not, will you provide mapping to more commonly used ontologies?", "Use of ontology:"],
            },
            allocationOfResource: {
                costsFair: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Costs for making FAIR data:"],
                costsFairCover: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Funding for FAIR data costs:"],
                costSharing: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Costs for data sharing:"],
                costSharingCover: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Funding for data sharing costs:"],
                datasetsListArchiving: ["Describe costs and potential value of long term preservation", "Data archiving:"],
                ArchivingWhere: ["Describe costs and potential value of long term preservation", "Archives:"],
                CostsArchiving: ["Describe costs and potential value of long term preservation", "Costs for archiving:"],
                CostsArchivingCover: ["Describe costs and potential value of long term preservation", "Funding for archiving:"],
                RespDataDoc: ["Clearly identify responsibilities for data management in your project", "Responsibility for data documentation:"],
                RespDataStorage: ["Clearly identify responsibilities for data management in your project", "Responsibility for data management:"],
                RespDataArchiving: ["Clearly identify responsibilities for data management in your project", "Responsibility for preservation and sharing:"],
                RespDMP: ["Clearly identify responsibilities for data management in your project", "Responsibility for DMP:"],
            },
            dataSecurity: {
                storageDuringWhere: ["Address data recovery as well as secure storage and transfer of sensitive data", "(Meta)Data Storage:"],
                storageDuringFrequency: ["Address data recovery as well as secure storage and transfer of sensitive data", "(Meta)Data backup:"],
                costDuring: ["Address data recovery as well as secure storage and transfer of sensitive data", "Costs for storage and backup:"],
                costDuringCover: ["Address data recovery as well as secure storage and transfer of sensitive data", "Funding for storage and backup:"],
                securityDuring: ["Address data recovery as well as secure storage and transfer of sensitive data", "Data security:"],
                SecurityArchiving: ["Address data recovery as well as secure storage and transfer of sensitive data", "Archive security:"],
            },
            ethicalAspects: {
                PersonalData: ["Ethical aspects", "Use of personal /sensitive data:"],
                EthicalIssue: ["Ethical aspects", "Ethical issues:"],
                IntellectualProperty: "Ethical aspects",
                LegalIssue: "",
                other: "Indicate whether other national/funder/sectorial/departmental procedures for data management are used."
            }
        }
    }
}




module.exports = data
