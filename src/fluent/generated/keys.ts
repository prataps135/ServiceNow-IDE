import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'a28db8f42d8b4b7fa35da6399ba34cc5'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '38515bde601448cd846659c6a9bc6780'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '80ce57b155d64904afb5768558788181'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '18643a24199e4215a0355c37932ea017'
                    }
                }
            }
        }
    }
}
